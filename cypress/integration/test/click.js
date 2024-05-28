describe("click",function(){
        it("click the '点我' button",function(){
            cy.visit("http://8.146.204.229:8000")
            cy.contains("点我").click().should('contain','点我')
        })
})