package com.books.book_store.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

public enum BusinessErrorCodes {
    NO_CODE(0, NOT_IMPLEMENTED, "no code"),
    INCORRECT_CURRENT_PASSWORD(300, BAD_GATEWAY, "incorrect current password"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, BAD_GATEWAY, "mismatching new password"),
    ACCOUNT_LOCKED(302, FORBIDDEN, "user account is locked"),
    ACCOUNT_DISABLED(303, FORBIDDEN, "user account is disabled"),
    BAD_CREDENTIALS(304, FORBIDDEN, "invalid email or password"),
    ;
    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, HttpStatus httpStatus, String description) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
