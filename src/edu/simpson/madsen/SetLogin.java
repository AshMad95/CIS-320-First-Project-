package edu.simpson.madsen;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by ashtyne.madsen on 3/23/2017
 */
@WebServlet(name = "SetSessionServlet")
public class SetLogin extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String sessionKey = request.getParameter("sessionKey");
        String sessionValue = request.getParameter("sessionValue");

        HttpSession session = request.getSession();
        session.setAttribute(sessionKey, sessionValue);

        out.println("Done setting the session variable");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}