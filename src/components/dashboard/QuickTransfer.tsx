import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/icons/arrow-right.svg?react";
import SendIcon from "@/assets/icons/send.svg?react";
import { useStore } from "@/store/useStore";

export function QuickTransfer() {
  const contacts = useStore((state) => state.contacts);

  const [showScrollRightButton, setShowScrollRightButton] = useState(false);
  const [showScrollLeftButton, setShowScrollLeftButton] = useState(false);
  const [amount, setAmount] = useState("525.50"); // State for the input amount
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1); // State for selected user
  const listRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to determine button visibility
  const handleScroll = () => {
    if (listRef.current) {
      const { scrollWidth, scrollLeft, clientWidth } = listRef.current;
      // Show right scroll button if not scrolled to the end
      setShowScrollRightButton(scrollLeft + clientWidth < scrollWidth - 5);
      // Show left scroll button if scrolled away from the start
      setShowScrollLeftButton(scrollLeft > 5);
    }
  };

  useEffect(() => {
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      // Initialize button visibility on component mount
      handleScroll();
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Scroll the list to the right by 300 pixels
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Scroll the list to the left by 300 pixels
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  // Handle changes in the input field
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  // Handle user selection
  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  // Handler for keydown events
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    userId: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleUserClick(userId);
    }
  };

  return (
    <div className="relative size-full flex flex-col sm:px-6 sm:pt-4 sm:pb-6">
      {/* User List */}
      <div className="relative flex-1 flex items-center">
        {/* Add vertical padding to prevent avatar clipping during scaling */}
        <div
          ref={listRef}
          className="relative flex gap-[28px] overflow-x-auto hide-scrollbar py-2"
        >
          {(contacts || []).map((user) => {
            const isSelected = user.id === selectedUserId;
            return (
              <div
                key={user.id}
                onClick={() => handleUserClick(user.id)}
                onKeyDown={(e) => handleKeyDown(e, user.id)}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                className={`w-[94px] flex flex-col items-center text-center flex-shrink-0 cursor-pointer transform transition-transform duration-300 ease-in-out ${
                  isSelected ? "" : ""
                }
                hover:scale-110 hover:shadow-lg group`}
              >
                <div className="w-[70px] h-[70px] relative">
                  {/* Add border around avatar to prevent clipping during scaling */}
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover border-2 border-transparent transition-all duration-300 ease-in-out group-hover:border-blue-500"
                  />
                </div>
                <p
                  className={`mt-2 text-accent ${
                    isSelected ? "font-black" : "font-medium"
                  }`}
                >
                  {user.name}
                </p>
                <p
                  className={`text-sm text-text ${
                    isSelected ? "font-black" : ""
                  }`}
                >
                  {user.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Left Gradient Overlay */}
        <div
          className={`absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-white to-transparent pointer-events-none transition-opacity duration-300 ${
            showScrollLeftButton ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Right Gradient Overlay */}
        <div
          className={`absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-white to-transparent pointer-events-none transition-opacity duration-300 ${
            showScrollRightButton ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Left Scroll Button with Animation */}
        <Button
          onClick={scrollLeft}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ease-in-out ${
            showScrollLeftButton
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll Left"
          variant="shadowRounded"
          size="icon"
        >
          <ArrowIcon className="rotate-180" />
        </Button>

        {/* Right Scroll Button with Animation */}
        <Button
          onClick={scrollRight}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ease-in-out ${
            showScrollRightButton
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll Right"
          variant="shadowRounded"
          size="icon"
        >
          <ArrowIcon />
        </Button>
      </div>

      {/* Input and Send Button */}
      <div className="relative flex items-center gap-4">
        <label htmlFor="amount" className="font-medium">
          Write Amount
        </label>
        <Input
          id="amount"
          type="number"
          placeholder="Write Amount"
          className="flex-1"
          value={amount}
          onChange={handleAmountChange}
        />
        <Button
          className="absolute right-0"
          variant="rounded"
          disabled={selectedUserId === null}
        >
          Send <SendIcon />
        </Button>
      </div>
    </div>
  );
}
