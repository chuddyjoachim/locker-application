
# Locker application

Check for available secure public and private lockers available around you in your state or city

## Tech Stack

**Server:** Java, Springboot, jpa, postgresql 

**Client:** React, Typescript, TailwindCSS

## Structure

| Codebase              |      Description          |
| :-------------------- | :-----------------------: |
| [root](.)             |  Java spring boot API     |
| [./frontend](frontend)|  React frontend          |

## API Reference

#### Get all lockers

```http
  GET /api/locker/listall
```

#### Get locker by id

```http
  GET /api/locker/getlockerbyid/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


  
#### Get lockers by city

```http
  GET /api/locker/getlockerbycity/${city}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `city`    | `string` | **Required**. city of item to fetch |


  
#### Get lockers by state

```http
  GET /api/locker/getlockerbystate/${state}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `state`   | `string` | **Required**. state of item to fetch |


## Running app in local enviroment
firstly you navigate to 
`src/main/resources` 
you have to create a 
`application.properties ` file  and in it edit the following
```code

spring.datasource.url=jdbc:postgresql://localhost:{DB_PORT}/{DB_NAME}
spring.datasource.username={DB_USERNAME}
spring.datasource.password={DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.sho-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL94Dialect
spring.jpa.properties.hibernate.format_sql=true
server.port={APP_PORT}


```