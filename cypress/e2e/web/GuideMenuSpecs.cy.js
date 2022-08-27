import GuidePage from "../../support/page-objects/guidePage";

const guidePage =  new GuidePage;

describe('Given I access the menu Guide', () => {
    context('When I to navigate to link "/albums/1/photos"', ()=>{
        it('Then I should see a list of albums objects', () => {
            cy.visit('/');
            guidePage.clickOnGuideMenu();
            //guidePage.clickLinkOnGuidadePage('/albums/1/photos');
            guidePage.exportDataOfPage('/albums/1/photos','albums1','report');
            cy.compareFixtureFileDataJson('albums1-id6-DataValidation','cypress/report/albums1')
          });
    });
})