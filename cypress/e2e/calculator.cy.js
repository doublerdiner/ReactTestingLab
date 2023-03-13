describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

// Do the number buttons update the display of the running total?
  it('should update display when multiple numbers are selected', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '753')
  })
// Do the arithmetical operations update the display with the result 
// of the operation?
  it('should display the correct answer after an addition calculation', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })
  it('should display the correct answer after a subtraction calculation', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')      
  })
  it('should display the correct answer after a multiplication calculation', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')      
  })
  it('should display the correct answer after a division calculation', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')      
  })
  
  // Can multiple operations be chained together?
  it('should display the correct answer after multiple operators have been used in a single calculation', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')           
  })
// Is the output as expected for a range of numbers 
// (for example, positive, negative, decimals and very large numbers)?
  it('should display the correct answer for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-9')   
  })
  it('should display the correct answer for decimal point numbers', () => {
    cy.get('#number6').click();
    cy.get('#decimal').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15.1')  
  })
  it('should display the correct answer for large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '64588')  
  })
// What does the code do in exceptional circumstances? 
// Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, and then 
// correct the code to make that test pass (you will need to modify 
// the Calculator model to meet this requirement).
  it('should display 0 when dividing by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')             
  })
})


