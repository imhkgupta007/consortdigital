# consortdigital
Test application for crud operations

Setup a local db and change the congurations in .env file with your credentials
Run following api's to test the CRUD Module:


POST - http://localhost:8000/api/crud_layer/createdata
add body -
{
    "employee_name": "Employee Name",
    "employee_salary": 385750,
    "employee_age": 14,
    "profile_image": ""
}

PUT - http://localhost:8000/api/crud_layer/updatedata
add body -
{
    "id": 1,
    "employee_name": "New Name",
    "employee_salary": 385750,
    "employee_age": 14,
    "profile_image": ""
}

GET - http://localhost:8000/api/crud_layer/getdata?limit=20&offset=50

GET - http://localhost:8000/api/crud_layer/getdatabyID?id=1

DELETE - http://localhost:8000/api/crud_layer/deletedata?id=1
