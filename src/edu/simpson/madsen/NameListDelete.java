package edu.simpson.madsen;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by ashtyne.madsen on 3/2/2017.
 */
@WebServlet(name = "NameListDelete")
public class NameListDelete extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Delete");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");

        // Just print the data out to confirm we got it.
        out.println("id = '"+id+"'");

        PersonDAO.deletePeople(id);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
