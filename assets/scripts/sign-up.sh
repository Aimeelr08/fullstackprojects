# var json = response.getContentText();
# var data = JSON.parse(json);
# Logger.log(data.title);

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\",
      \"password_confirmation\": \"${PASSWORD}\"
    }
  }"
  # var payload = JSON.stringify(data);
echo
