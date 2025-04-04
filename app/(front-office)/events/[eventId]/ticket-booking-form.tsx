/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

type TicketType = {
  id: string;
  name: string;
  price: number;
  available: number;
  maxPerPurchase: number;
};

interface TicketBookingFormProps {
  eventId: string;
  ticketTypes: TicketType[];
  bookTicket: (
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}

export default function TicketBookingForm({
  ticketTypes,
}: TicketBookingFormProps) {
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const selectedTicketType = ticketTypes.find(
    (ticket) => ticket.id === selectedTicket
  );
  const maxQuantity = selectedTicketType?.maxPerPurchase || 1;
  const isAvailable = selectedTicketType && selectedTicketType.available > 0;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("OK");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="ticketType">Ticket Type</Label>
        <Select
          value={selectedTicket}
          onValueChange={setSelectedTicket}
          name="ticketType"
          required
        >
          <SelectTrigger id="ticketType">
            <SelectValue placeholder="Select ticket type" />
          </SelectTrigger>
          <SelectContent>
            {ticketTypes.map((ticket) => (
              <SelectItem
                key={ticket.id}
                value={ticket.id}
                disabled={ticket.available === 0}
              >
                {ticket.name} - ${ticket.price.toFixed(2)}
                {ticket.available === 0 && " (Sold Out)"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          min={1}
          max={maxQuantity}
          value={quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
          required
          disabled={!selectedTicket || !isAvailable}
        />
        {selectedTicketType && (
          <p className="text-xs text-muted-foreground">
            Maximum {maxQuantity} tickets per purchase
          </p>
        )}
      </div>

      {selectedTicketType && (
        <div className="flex justify-between font-medium py-2">
          <span>Total:</span>
          <span>${(selectedTicketType.price * quantity).toFixed(2)}</span>
        </div>
      )}

      {selectedTicketType &&
        selectedTicketType.available < 10 &&
        selectedTicketType.available > 0 && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Only {selectedTicketType.available} tickets left! Don't miss out.
            </AlertDescription>
          </Alert>
        )}

      <Button type="submit" className="w-full" size="lg" disabled={true}>
        Sign in to Book
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        You need to be signed in to book tickets
      </p>
    </form>
  );
}
