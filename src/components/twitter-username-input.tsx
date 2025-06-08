"use client";

import { Input } from "@/components/ui/input";
import { LoaderCircle, Search, Send } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { LoadingScreen } from "./loading-modal";

export function TwitterUsernameInput() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setShowLoadingScreen(true);
    }
  };

  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 min-w-[300px]">
      <div className="relative">
        <Input
          id={id}
          className="peer pe-9 ps-9 bg-background border-input text-foreground placeholder:text-muted-foreground"
          placeholder="Enter your Twitter username..."
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircle
              className="animate-spin"
              size={16}
              strokeWidth={2}
              role="status"
              aria-label="Loading..."
            />
          ) : (
            <Search size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send"
        >
          <Send size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
} 