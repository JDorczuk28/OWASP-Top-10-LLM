from flask import Flask, jsonify, render_template, request

from chatbot import get_reply

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    history = data.get("history") or []
    if not history or not str(history[-1].get("content", "")).strip():
        return jsonify({"error": "Message is empty"}), 400
    return jsonify({"reply": get_reply(history)})


if __name__ == "__main__":
    app.run(debug=True)
