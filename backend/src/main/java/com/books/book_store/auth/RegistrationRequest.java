package com.books.book_store.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegistrationRequest {
    @NotEmpty(message = "First Name is required")
    @NotBlank(message = "First Name is required")
    private String firstName;
    @NotEmpty(message = "Last Name is required")
    @NotBlank(message = "Last Name is required")
    private String lastName;
    @Email(message = "Email is invalid")
    @NotEmpty(message = "Email is required")
    @NotBlank(message = "Email is required")
    private String email;
    @NotEmpty(message = "Password is required")
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "password must be atleast 8 characters")
    private String password;
}
