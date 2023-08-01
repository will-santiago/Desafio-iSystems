describe('Teste de API - Imagem do Produto', () => {
  it('Deve retornar a imagem do produto com status 200 OK', () => {
    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('#item_4_img_link > .inventory_item_img').click()
    cy.request('GET', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg', { encoding: 'binary' })
      .then((response) => {

      expect(response.status).to.equal(200);
      
      expect(response.headers['content-type']).to.include('image');
    });
  })
})