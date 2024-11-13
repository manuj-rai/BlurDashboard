// inquiry.model.ts

export interface Inquiry {
  id: number;       // The unique ID for the inquiry
  name: string;     // The name of the person making the inquiry
  email: string;    // The email of the person making the inquiry
  message: string;  // The message in the inquiry
  date: string;     // The date of the inquiry, as a string (can be formatted)
}
