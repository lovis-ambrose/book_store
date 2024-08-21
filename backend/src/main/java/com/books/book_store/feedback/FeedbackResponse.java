package com.books.book_store.feedback;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FeedbackResponse {
    private Double rate;
    private String comment;
    private boolean ownFeedback;
}
