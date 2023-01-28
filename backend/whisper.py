from io import BytesIO
import base64
import banana_dev as banana

def Whisper(base64_string):
    api_key = "71a182c0-eb49-4735-bac9-38255c652d06"
    model_key = "47cbae27-ff72-4d78-be2d-0bfacf43baab"

    model_payload = {"mp3BytesString": base64_string}
    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]["text"]
