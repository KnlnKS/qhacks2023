from flask import Flask, request
from whisper import Whisper
from flanT5 import Summarize, Search
from googleDocs import createDocument
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route("/")
def hello():
  return "Hello World!"

@app.route("/transcription", methods=["POST"])
def getTranscription():
    if request.method == "POST":
        auth_header = request.headers.get('Authorization')
        base64_string = request.data.decode("utf-8")
        transcription = Whisper(base64_string)
        createDocument(auth_header, "temporary title", transcription)
        return "success!"

    return "uhh..."


@app.route("/summarize", methods=["POST"])
def getSummary():
    if request.method == "POST":
        text = request.form.get('text')

        return Summarize(text)
    return "uhh..."

@app.route("/search", methods=["POST"])
def searchQuery():
    if request.method == "POST":
        text = request.form.get('text')
        search_query = request.form.get('query')

        return Search(text, search_query)
    return "uhh..."



if __name__ == "__main__":
  app.run()
