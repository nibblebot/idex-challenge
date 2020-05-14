import React from "react"

export function Help() {
  return (
    <header>
      <h1>Contact Us</h1>
      <form>
        <label>
          Let us know how we can help
          <textarea
            placeholder={
              "Let us know if you have any questions or suggestions, we would be more than happy to help you!"
            }
          ></textarea>
        </label>
      </form>
    </header>
  )
}
