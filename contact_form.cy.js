describe('Contact Form Tests', () => {
  beforeEach(() => {
    cy.visit('https://practise.usemango.co.uk'); 
    cy.get('a.nav-item.nav-link[href="/contact"]').click();
    cy.url().should('include', '/contact');
  });

  it('should submit the form successfully and display success message', () => {
    cy.get('input[id="inputName"]').type('John Doe');
    cy.get('input[id="inputEmail"]').type('johndoe@example.com');
    cy.get('input[id="inputPhone"]').type('9425273832');
    cy.get('textarea[id="inputMessage"]').type('Test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Your message has been submitted').should('be.visible');
  });

  it('should display an error when the name is missing', () => {
    cy.get('input[id="inputEmail"]').type('johndoe@example.com');
    cy.get('input[id="inputPhone"]').type('9425273832');
    cy.get('textarea[id="inputMessage"]').type('Test message.');
    cy.get('button[type="submit"]').click();
    cy.get('input[id="inputName"]:invalid').should('exist');
    // cy.get('.error-message') 
    //   .should('contain.text', 'Name not given');
  });

  it('should display an error when the Email is missing', () => {
    cy.get('input[id="inputName"]').type('John Doe');
    cy.get('input[id="inputPhone"]').type('9425273832');
    cy.get('textarea[id="inputMessage"]').type('Test message.');
    cy.get('button[type="submit"]').click();
    cy.get('input[id="inputEmail"]:invalid').should('exist');
  });

  it('should display an error when the Phone number is missing', () => {
    cy.get('input[id="inputName"]').type('John Doe');
    cy.get('input[id="inputEmail"]').type('johndoe@example.com');
    cy.get('textarea[id="inputMessage"]').type('Test message.');
    cy.get('button[type="submit"]').click();
    cy.get('input[id="inputPhone"]:invalid').should('exist');
  });

  it('should display an error when the message is missing', () => {
    cy.get('input[id="inputName"]').type('John Doe');
    cy.get('input[id="inputEmail"]').type('johndoe@example.com');
    cy.get('input[id="inputPhone"]').type('9425273832');
    cy.get('button[type="submit"]').click();
    cy.get('textarea[id="inputMessage"]:invalid').should('exist');
  });
});
