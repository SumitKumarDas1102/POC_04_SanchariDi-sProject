/// <reference types="cypress" />

class loginPage{

    //Open the webApplication
    visit_webApplication(){
        cy.visit("https://app.clickup.com/login")
    }

    validate_LoginPage(){
        const loginButton = cy.get("[id='login-submit']").should('contain.text','Login')
    }

    loginToApplication(email,password){
        cy.login_into_application(email,password ) //Using login custom command referecence -> Support > command.js
    }

    click_TaskButton(){
        cy.wait(50000)
        const taskButton = cy.get('.cu-float-button__toggle-simple-container-create-task')
        taskButton.click()
       }
    
       create_Task(value){
           const inputField = cy.get('.notranslate > .ql-editor')
           inputField.clear()
           inputField.type(value)
           return this
       }
    
       Enter_TaskName(value){
           const taskName = cy.get('.cu-form__input')
           taskName.clear
           taskName.type(value)
       }
    
       click_TaskCreateButton(){
           const create_Task_Button = cy.get('.cu-draft-view__submit-msg')
           create_Task_Button.click()
       }

}

export default loginPage