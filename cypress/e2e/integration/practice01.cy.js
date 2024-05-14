// <reference types="cypress"/>

describe('Project-01', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1');
  })
it('Test Case 01 - Validate the Contact Us information', () => {
//Validate the heading is “Contact Us”
cy.get('.is-size-3').should('have.text','Contact Us');

//Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
cy.get('#address').should('have.text','2800 S River Rd Suite 310, Des Plaines, IL 60018');

//Validate the email is “info@techglobalschool.com"
cy.get('#email').should('have.text','info@techglobalschool.com');

//Validate the phone number is “(224) 580-2150”
cy.get('#phone-number').should('have.text','(224) 580-2150')
});
 
it('Test Case 02 - Validate the Full name input box', () => {
  //Validate that the Full name input box is displayed
  cy.get(':nth-child(1) > .control > .input').should('be.visible'); 
 
//Validate that the Full name input box is required
cy.get(' div .control > input').should('have.attr', 'required');

//Validate that the label of the Full name input box is “Full name *”
  cy.get('form >:nth-child(1) > .label').should('have.text','Full name *')
  
  //Validate that the placeholder of the Full name input box is “Enter your full name”
  cy.get('input[type="text"]').first().should('have.attr', 'placeholder', 'Enter your full name');

})

it('Test Case 03 - Validate the Gender radio button', () => {
   //Validate the label is “Gender *”
cy.get('.control > .label').should('have.text','Gender *')

//Validate that the Gender is required
cy.get('.mr-1').should('have.attr', 'required')

//Validate the options are “Female”, “Male” and “Prefer not to disclose”
const gender = ["Male", "Female", "Prefer not to disclose"];

cy.get('.radio').each(($el, index) => {
cy.wrap($el).should('have.text', gender[index]);
});

//Validate the options are clickable and not selected
cy.get(':nth-child(2) > .mr-1 ').should('be.visible').click().should('be.enabled')
cy.get(':nth-child(3) > .mr-1 ').should('be.visible').click().should('be.enabled')
cy.get(':nth-child(4) > .mr-1 ').should('be.visible').click().should('be.enabled')

//Click on the “Male” option and validate it is selected while the others are not selected
cy.get('.mr-1').first().click().should('be.checked')
cy.get('.ml-0 .mr-1').each(($el) => {
cy.wrap($el).should('be.empty')


//Click on the “Female” option and validate it is selected while the others are not selected


cy.get('.ml-0 .mr-1').first().click().should('be.checked')
      cy.get('.mr-1').first().should('be.empty')
      cy.get('.ml-0 .mr-1').last().should('be.empty')

  })
})
  it('Test Case 04 - Validate the Address input box', () => {
//Validate that the Address input box is displayed
cy.get(':nth-child(3) > .control').should('be.visible')

// Validate that the Address input box is not required
cy.get('input[type="text"]').last().should('not.have.attr', 'required');

 //Validate that the label of the Address input box is “Address”
 cy.get(':nth-child(3) > .label').should ('have.text', 'Address')

 //Validate that the placeholder of the Address input box is “Enter your address*”
cy.get('input[type="text"]').last().should('have.attr','placeholder','Enter your address')
  
})

it('Test Case 05 - Validate the Email input box', () => {
// Validate that the Email input box is displayed 
cy.get(':nth-child(4) > .control ').should('be.visible')

//Validate that the Email input box is required
cy.get('input[type="email"]').should('have.attr','required')

//Validate that the label of the Email input box is “Email *”
cy.get(':nth-child(4) > .label').should('have.text', 'Email *')

//Validate that the placeholder of the Email input box is “Enter your email”
cy.get('input[type="email"]').should('have.attr','placeholder','Enter your email')
})

it('Test Case 06 - Validate the Phone input box', () => {

//Validate that the Phone input box is displayed
cy.get(':nth-child(5) > .control ').should('be.visible')

//Validate that the Phone input box is not required
cy.get('input[type="phone"]').should('not.have.attr','required')

//Validate that the label of the Phone input box is “Phone”
cy.get(':nth-child(5) > .label').should('have.text', 'Phone')

//Validate that the placeholder of the Phone input box is “Enter your phone number”
cy.get('input[type="phone"]').should('have.attr','placeholder','Enter your phone number')

})


it('Test Case 07 - Validate the Message text area', () => {
//Validate that the Message text area is displayed
cy.get('.textarea').should('be.visible')

// Validate that the Message text area is not required
cy.get('.textarea').should('not.have.attr','required')

//Validate that the label of the Message text area is “Message”
cy.get(':nth-child(6) > .label').should('have.text','Message')

//Validate that the placeholder of the Message text area is “Type your message here…”
cy.get('.textarea').should('have.attr','placeholder', 'Type your message here...')

})

it('Test Case 08 - Validate the Consent checkbox', () => {
//Validate the label is “I give my consent to be contacted.”
cy.contains('I give my consent to be contacted.').should('be.visible')

//Validate that the Consent checkbox is required
cy.get('[type="checkbox"]').should('have.attr', 'required')

//Validate that the Consent checkbox is clickable
//Click on the “I give my consent to be contacted.” checkbox and validate it is selected
cy.get('[type="checkbox"]').click().should('be.checked')

//Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
cy.get('[type="checkbox"]').click().should('not.be.checked')

})

it('Test Case 09 - Validate the SUBMIT button', () => {

  //Validate the “SUBMIT” button is displayed
  //Validate the “SUBMIT” button is clickable
  //Validate that the button text is “SUBMIT”
  cy.get('.button').should('be.visible')
  .and('be.enabled')
  .and('have.text','SUBMIT')
 
})

it('Test Case 10 - Validate the form submission', () => {
//Enter a first name
cy.get(':nth-child(1) > .control > .input').type('Nadejda Ceban')

//Select a gender
cy.contains('Female').click()

//Enter an address
cy.get('input[type="text"]').last().type('123 Main Street,NY 60564')

//Enter an email
cy.get('input[type="email"]').type('ceban.nadejda@yahoo.com')

//Enter a phone number
cy.get('input[type="phone"]').type('7653452345')

//Enter a message
cy.get('.textarea').type('This is a test message!')

//Select the “I give my consent to be contacted.” checkbox
cy.get('[type="checkbox"]').click().should('be.checked')

//Click on the “SUBMIT” button
cy.get('.button').click()

//Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
cy.get('.mt-5').should('be.visible')
})

})
Cypress.on("uncaught:exception", () => {
  return false;
});
