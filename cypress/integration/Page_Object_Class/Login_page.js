/// <reference types="cypress" />

class loginPage{

    //Open the webApplication
    visit_webApplication(){
        cy.visit("https://app.clickup.com/login")
    }

    validate_LoginPage(){
        const loginButton = cy.get("[id='login-submit']").should('contain.text','Login')
    }

    enter_Email_Address(value){
        const emailID = cy.get("[id='email-input']")
        emailID.clear()
        emailID.type(value)
        return this
    }

    enter_Password(value){
        const password = cy.get("[id='password-input']")
        password.clear()
        password.type(value)
        return this
    }

    click_LoginButton(){
        const loginButton = cy.get("[id='login-submit']")
        loginButton.click()
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