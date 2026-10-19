const form = document.getElementById("chat-form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const button = form.querySelector("button");
const history = [];

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `msg ${sender}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    history.push({ role: "user", content: text });
    input.value = "";
    button.disabled = true;
    const thinking = addMessage("...", "bot");

    try {
        const res = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ history }),
        });
        const data = await res.json();
        thinking.textContent = data.reply || data.error || "No reply.";
        if (data.reply) history.push({ role: "assistant", content: data.reply });
    } catch (err) {
        thinking.textContent = "Error: could not reach the server.";
    } finally {
        button.disabled = false;
        input.focus();
    }
});
