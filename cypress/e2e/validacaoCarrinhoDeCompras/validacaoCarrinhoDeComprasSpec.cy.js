describe('Validação do Carrinho de Compras', () => {
  it('Deve validar se o produto e a quantidade foram adicionados corretamente ao carrinho', () => {
    cy.visit('https://www.amazon.com.br')

    cy.get('#twotabsearchtextbox').type('iCLAMPER Energia 8 Preto');
    cy.get('#twotabsearchtextbox').type('{enter}');
    cy.get('[data-index="2"] > .sg-col-inner > .s-widget-container > .s-card-container').click();
    cy.wait(1000)

    cy.get('#quantity').select('2');
    cy.wait(1000)

    cy.get('#add-to-cart-button').click();
    cy.get('#nav-cart').click();

    cy.url().should('eq', 'https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart')

    cy.get('.sc-list-item-content').each(($item) => {
      const nomeProdutoEsperado = 'iCLAMPER Energia 8 Preto'
      const nomeProdutoNoCarrinho = $item.find('.a-truncate-cut').text()
      expect(nomeProdutoEsperado).to.eq(nomeProdutoNoCarrinho)
    
    cy.get('.a-dropdown-prompt').then(($quantidade) => {
      const quantidadeNoCarrinho = parseInt($quantidade.text())
      const quantidadeEsperada = 2
      expect(quantidadeNoCarrinho).to.eq(quantidadeEsperada)
    });
    });
  });
});