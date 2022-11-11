/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import { render, screen } from "@testing-library/react"
import App from "./App"

describe('The app main component...', () => {
  it('...renders hello', () => {
    render(<App />)
    const helloDiv = screen.getByText(/hallo/i)
    expect(helloDiv).toBeVisible()
  })

  it('renders the selectbox', () => {
    render(<App />)
    screen.logTestingPlaygroundURL()
    expect(1).toBe(1)
  })

  it('renders the strange text and checks for red border', () =>{
    render(<App />)
    const textParagraph= screen.getByText(/das ist ein seltsamer text/i)
    expect(textParagraph).toBeVisible()

    // check for red border
    expect(textParagraph).toHaveClass('border-[#FF0000]') 
    // complete classes works
    expect(textParagraph).toHaveClass('p-6 border-[6px] border-[#FF0000]') 
    // also works if order is different as rendered
    expect(textParagraph).toHaveClass('border-[6px] border-[#FF0000] p-6') 
    
    // fails if another class is being checked
    // as "border-[6px] border-[#FF0000] p-6" is rendered
    // expect(textParagraph).toHaveClass('border-[6px] border-[#FF0000] p-16') 
    
    // with not it passes again
    expect(textParagraph).not.toHaveClass('border-[6px] border-[#FF0000] p-16') 
  })
})