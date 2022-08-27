class GuidePage {
    clickOnGuideMenu(){
        cy.get('a').contains('Guide').click();
    }

    clickLinkOnGuidadePage(hrefPage){
        cy.get(`a[href="${hrefPage}"]`).click({force: true, stop: true});
    }

    exportDataOfPage(pageUrl, fileName, exportPath, fileExtension = 'json'){
        cy.request({
            url: pageUrl
        }).then((response) =>{
            cy.writeFile(`cypress/${exportPath}/${fileName}.${fileExtension}`, response.body)
        });
    }

}

export default GuidePage;