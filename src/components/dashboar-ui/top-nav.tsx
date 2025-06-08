"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "../theme-toggle"
import {
  Bell,
  ChevronRight,
  Database,
  HelpCircle,
  MoreVertical,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Profile01 from "./profile-01"

export default function TopNav() {
  const userName = "John Doe" // Replace with actual user name
  const isConnected = false // Replace with actual connection status

  return (
    <header className="flex h-14 items-center justify-between bg-background px-4">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex h-6 w-6 items-center justify-center">
          <Twitter className="h-5 w-5 text-blue-400" />
        </div>

        {/* User/Project section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-foreground">{userName}</span>
            <Badge
              variant="outline"
              className="rounded-full border-border bg-transparent px-1.5 py-0 text-xs text-muted-foreground"
            >
              Free
            </Badge>
          </div>
          <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
            <ChevronRight size={14} />
          </Button>
        </div>

        {/* Project name */}
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
            <Database size={14} />
          </Button>
          <span className="text-sm text-foreground">{userName}&apos;s Project</span>
          <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
            <ChevronRight size={14} />
          </Button>
        </div>

        {/* Connect button */}
        <Button
          variant="outline"
          size="sm"
          className="relative h-8 rounded-md border-border bg-background px-3 text-xs text-foreground hover:bg-accent"
        >
          <span className="mr-2">Connect</span>
          <span className={`absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-red-500'}`} />
        </Button>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
          Feedback
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Bell size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <HelpCircle size={16} />
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Image
                src="/images/avatar.png"
                alt="User avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <Profile01 avatar="/images/avatar.png" />
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <MoreVertical size={16} />
        </Button>
      </div>
    </header>
  )
}
