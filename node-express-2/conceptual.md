Conceptual Exercise
Answer the following questions below:

What is a JWT?

JWT stands for JSON Web Token. It is a compact and self-contained way to represent information between two parties. JWTs are often used to securely transmit information between a client and a server as a JSON object.

What is the signature portion of the JWT? What does it do?

The signature portion of the JWT is one of the three components in a JWT, along with the header and the payload. It is created by hashing the header, payload, and a secret key using an algorithm specified in the header. The signature ensures the integrity of the data and allows the recipient to verify that the JWT has not been tampered with.

If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, the payload of a JWT is base64-encoded, not encrypted. Therefore, if a JWT is intercepted, an attacker can easily decode the payload and see its contents. To protect sensitive data, it is essential to avoid putting confidential information in the payload and use encryption if necessary.

How can you implement authentication with a JWT? Describe how it works at a high level.

Authentication with JWT involves the client sending a username and password to the server during login. The server then verifies the credentials and, if valid, generates a JWT containing the user's identity and additional data. The server signs the JWT with a secret key and sends it back to the client. The client stores the JWT and includes it in the Authorization header for subsequent requests. The server validates the JWT's signature and extracts the user's identity from the payload to identify the user and authorize access.

Compare and contrast unit, integration, and end-to-end tests.

Unit tests focus on testing individual components or functions in isolation to ensure they work correctly. Integration tests verify interactions between multiple components or systems. End-to-end tests examine the entire system's behavior from start to finish, testing user workflows and the system's response to real-world scenarios.

What is a mock? What are some things you would mock?

A mock is a simulated object that mimics the behavior of a real object during testing. It allows you to isolate and test specific parts of the code without relying on the actual implementation of other components. Examples of things to mock include API calls, database connections, external services, and expensive computational operations.

What is continuous integration?

Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repository. Automated builds and tests are triggered upon each integration to detect issues early and ensure the codebase is always in a working state.

What is an environment variable, and what are they used for?

An environment variable is a dynamic value that can affect how processes behave within an operating system. They are used to configure software, set system parameters, and pass information to programs. Environment variables are often used for storing configuration settings, sensitive data, and system-specific values.

What is TDD? What are some benefits and drawbacks?

TDD stands for Test-Driven Development. It is a development approach where tests are written before implementing the actual code. Developers first write a test that describes the desired functionality, then write the minimum code to pass the test, and finally refactor the code to improve its design. Benefits of TDD include improved code quality, increased confidence in the codebase, and quicker feedback on potential issues. Drawbacks can include increased development time and the need to refactor tests when requirements change.

What is the value of using JSONSchema for validation?

JSONSchema is a tool for defining the structure and data types of JSON data. It allows you to validate JSON data against a schema to ensure it adheres to a specific format. Using JSONSchema for validation helps catch data inconsistencies early, ensures data integrity, and makes APIs more self-documenting.

What are some ways to decide which code to test?

Code that contains critical business logic, complex algorithms, or potential failure points should be tested. Additionally, test cases should be written for code paths that handle different edge cases, input validations, and exceptional conditions.

What does RETURNING do in SQL? When would you use it?

In SQL, RETURNING is used with INSERT, UPDATE, or DELETE statements to retrieve the values of specific columns from the affected rows after performing the operation. You would use it when you want to know the exact data that was inserted, updated, or deleted, especially when the operation affects multiple rows.

What are some differences between Web Sockets and HTTP?

HTTP is a request-response protocol, where clients send requests to servers, and servers respond with data. Web Sockets, on the other hand, enable bidirectional communication between clients and servers, allowing real-time data exchange without the need for multiple HTTP requests. Web Sockets are more efficient for real-time applications, such as chat systems and live updates.

Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)? I prefer express because i like to be able to work front and backend in the same language and node/express allows me to do this.