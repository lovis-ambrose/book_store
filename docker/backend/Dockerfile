# Build stage
FROM maven:3.6.3-openjdk-17 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:17
# pass arguments in case of fixes that may change version
ARG PROFILE=dev
ARG APP_VERSION=1.0.0

WORKDIR /app
COPY --from=build /build/target/book_store-*.jar /app/

EXPOSE 8090

ENV DB_URL=jdbc:postgresql://postgres-sql-bsn:5432/book_store
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD ["sh", "-c", "java -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} -jar book_store-${JAR_VERSION}.jar"]


