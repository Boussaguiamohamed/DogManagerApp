# Content
1. [Description](#description)
2. [Functionality](#functionality)
3. [Technologie](#technologie)
4. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Usage](#usage)  
6. [Routes Structure](#routes-structure)
   - [Backend Routes](#backend-routes)
   - [Frontend Routes](#frontend-routes)
7. [Testing](#testing)
 - [Backend Testing](#backend-testing)
 - [Frontend Testing](#frontend-testing)


## Description
DogManagerApp is a application that allows users to add dogs with their age via a web form. 

## Functionality

1. Add a dog with its age using a form.
2. Display the list of added dogs along with the date of the last modification.
3. Persist the dog data to a backend server and store it in a database.


## Technologies
- **Backend**: Node.js, TypeScript
- **Frontend**: React, TypeScript

## Installation

### Prerequisites
- Node.js 
- npm  
- Mikro-orm
- React


### Backend Setup


### Frontend Setup


## Usage
1. After running `npm run dev` in The frontend directory,you get the port where the plattform is running.
2. Use the form to add a new dog by entering its name and age.
3. The list of dogs will be displayed along with the date of the last modification.


## Routes Structure

### Backend Routes
- `POST /dogs` - Add a new dog.
- `GET /dogs` - Get all dogs.

### Frontend Routes
- `/` - Main page with form to add dogs and list of added dogs


## Testing

### Backend Testing
The Description of how you can test the backend.
1. You create a Collection in Postman App
2. You add each route as a request 
3. You control Database Table with TablePlus

- GET: `http://localhost:4000/dog` : As response, you will get all the dogs that you posted.
- POST: `http://localhost:4000/dog` : Here you need to have a body as a request to post the body, as response you will get the dog that you posted.
- DELETE: `http://localhost:4000/dog`: Here you delete the list of Dogs that you posted in Database, as response you will message that list is deleted.


### Frontend Testing


This README provides a comprehensive guide to understanding, setting up, and using the plattform. If you have any specific questions or need further assistance, feel free to ask!