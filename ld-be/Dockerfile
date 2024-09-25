# Stage 1: Build stage
FROM gradle:7.6.0-jdk17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the Gradle wrapper and build files
COPY gradle/ gradle/
COPY build.gradle settings.gradle gradlew ./

# Download project dependencies (without building the application)
RUN ./gradlew build -x test --parallel --continue

# Copy the rest of the project files
COPY src ./src

# Build the application
RUN ./gradlew clean bootJar -x test

# Stage 2: Run stage
FROM eclipse-temurin:17-jdk-jammy as runner

# Set environment variables for the app
ENV JAVA_OPTS=""
ENV APP_HOME="/app"

# Create directory for the application
WORKDIR $APP_HOME

# Copy the built jar from the builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose the port the app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
