from flask import Flask, request
from whisper import Whisper
from flanT5 import Summarize, Search

app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/transcription", methods=["POST"])
def getTranscription():
    if request.method == "POST":
        base64_string = request.form.get('base64_string')

        return Whisper(base64_string)
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
