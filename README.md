#1  open PostMan Application and try running these commands
for creating question localhost:9000/question/create method: POST , here you have to give key as title and value as question
for deleting question localhost:9000/question/:id/delete method: GET , here you have to give _id of that question

how to start :
Terminal => nodemon index.js


Open Postman => 


URL :localhost:9000/api/createproduct


Body :body=> raw =>  {
  "productname": "Products",
  "price": 75,
  "discription": "Lorem ipsum dolor sit",
  "Image":" in this secotion convert image to Base64 URL and paste Base64 Image source URL and  donot Base64 Encoded String URL"
}


 converter image to base64 URL :  https://www.base64encoder.io/image-to-base64-converter/
