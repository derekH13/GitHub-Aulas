/// <reference types="cypress" />

describe('Testes para a pagina de contatos, Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        
        cy.get('input[placeholder="Nome"]').type('cris');
        cy.get('input[placeholder="Telefone"]').type('11 5634569');
        cy.get('input[placeholder="E-mail"]').type('cris@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('cris').should('exist');
        cy.contains('11 5634569').should('exist');
        cy.contains('cris@example.com').should('exist');
      });

      it('Deve Editar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();

        cy.get('input[placeholder="Nome"]').clear().type('daniel');
        cy.get('input[placeholder="Telefone"]').clear().type('11 12312311');
        cy.get('input[placeholder="E-mail"]').clear().type('daniel@example.com');
        
        cy.get('.alterar').click()
        
        cy.contains('daniel').should('exist');
        cy.contains('11 12312311').should('exist');
        cy.contains('daniel@example.com').should('exist');
    });

    it('Deve remover o terceiro contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

 
        cy.on('window:confirm', () => true);

     
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();

 
        cy.contains('daniel').should('not.exist');
    });



})

