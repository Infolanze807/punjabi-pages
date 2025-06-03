"use client"

import React, { useState, useContext, createContext, forwardRef } from "react"
import { ChevronDown } from "lucide-react"

const SelectContext = createContext({
  value: "",
  setValue: () => {},
  open: false,
  setOpen: () => {},
  placeholder: "",
})

const Select = ({ children, onValueChange, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)

  const handleValueChange = (newValue) => {
    setValue(newValue)
    setOpen(false)
    if (onValueChange) onValueChange(newValue)
  }

  return (
    <SelectContext.Provider value={{ value, setValue: handleValueChange, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = forwardRef(({ className = "", children, ...props }, ref) => {
  const { open, setOpen } = useContext(SelectContext)

  return (
    <button
      ref={ref}
      className={
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext)
  return <span>{value || placeholder}</span>
}

const SelectContent = ({ children }) => {
  const { open } = useContext(SelectContext)

  if (!open) return null

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md">
      {children}
    </div>
  )
}

const SelectItem = forwardRef(({ className = "", children, value, ...props }, ref) => {
  const { setValue } = useContext(SelectContext)

  return (
    <button
      ref={ref}
      className={
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
        className
      }
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
