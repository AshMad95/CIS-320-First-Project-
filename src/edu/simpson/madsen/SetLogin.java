package edu.simpson.madsen;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by ashtyne.madsen on 3/23/2017
 */
@WebServlet(name = "SetLoginServlet")
public class SetLogin extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String loginID = request.getParameter("loginID");

        HttpSession login = request.getSession();
        login.setAttribute("loginID", loginID);

        out.println("Done setting the login variable");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}