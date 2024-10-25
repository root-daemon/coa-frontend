"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Event {
  id: number;
  title: string;
  organizer: string;
  date: string;
  type: string;
  registrationOpen: boolean;
}

const categories = [
  "All",
  "Conference",
  "Workshop",
  "Recruitment",
  "Hackathon",
  "Recreational",
];

export default function EventHub() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data: Event[] = await res.json();
        setEvents(data);
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || event.type === selectedCategory)
    );
    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, events]);

  if (loading) {
    return <div className="text-center text-xl">Loading events...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">Error: {error}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded"></div>
          <h1 className="text-2xl font-bold">EveHub</h1>
        </div>
        <nav>
          <Button variant="ghost">Explore</Button>
          <Button variant="ghost">Login</Button>
        </nav>
      </header>

      <main>
        <h2 className="text-4xl font-bold mb-6">
          Explore the events happening at SRM KTR Campus
        </h2>

        <div className="mb-6">
          <h3 className="text-xl mb-2">Categories</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search event here"
            className="pl-10 bg-gray-800 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="bg-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-40 bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-2">{event.organizer}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-gray-700 px-2 py-1 rounded">
                      {event.date}
                    </span>
                    <span
                      className={`px-2 py-1 rounded ${
                        event.registrationOpen ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {event.registrationOpen
                        ? "Registrations Open"
                        : "Registrations Closed"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl">
              No events found.
            </div>
          )}
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
