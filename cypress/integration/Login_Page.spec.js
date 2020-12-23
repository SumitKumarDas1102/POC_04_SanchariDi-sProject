/// <reference types="cypress" />

import loginPage from './Page_Object_Class/Login_page'

describe('Cypress automation test', function(){


    it('TC-01 - Open the application URL', function(){
        const lp = new loginPage()
        lp.visit_webApplication()
        lp.validate_LoginPage()
    })

    it('TC-02 - Log into the application', function(){
        const lp = new loginPage()
        lp.enter_Email_Address('ashish.corelynx@hotmail.com')
        lp.enter_Password('C0relynx')
        lp.click_LoginButton()
        cy.wait(200)
    })

    it('TC-03 - Click on the Task button', function(){
        const lp = new loginPage()
        cy.wait(1000)
        lp.click_TaskButton()
    })

    it('TC-04 - Enter task details', function(){
        const lp = new loginPage()
        lp.Enter_TaskName('My task demo')
        lp.create_Task('Demo task details')
        lp.click_TaskCreateButton()
    })









})