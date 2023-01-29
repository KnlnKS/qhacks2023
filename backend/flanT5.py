import banana_dev as banana

def Summarize(text):
    api_key = "71a182c0-eb49-4735-bac9-38255c652d06"
    model_key = "ff735c41-b964-460a-8ca2-56cde72d484a"

    model_params = {
        "min_length": 50,
        "max_length": 150,
        "no_repeat_ngram_size": 3,
        "early_stopping": False
    }
    model_payload = {"prompt": text, "params": model_params}
    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]

def Search(text, query):
    api_key = "71a182c0-eb49-4735-bac9-38255c652d06"
    model_key = "ff735c41-b964-460a-8ca2-56cde72d484a"

    model_params = {
        "min_length": 3,
        "max_length": 150,
        "no_repeat_ngram_size": 3,
        "early_stopping": False
    }
    if query[-1] != "?":
        query = query + "?"

    new_text = 'Answer the following questions based on this text. Give an explanation for your answer:\n\n' + text + "\nQ: " + query
    model_payload = {"prompt": new_text, "params": model_params}

    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]