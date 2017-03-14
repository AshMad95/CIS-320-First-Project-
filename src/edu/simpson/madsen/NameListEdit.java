package edu.simpson.madsen;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by ashtyne.madsen on 2/16/2017
 */
@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern firstnameValidationPattern;
    private Pattern lastnameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit() {
        firstnameValidationPattern = Pattern.compile("^[a-zA-Z' -]{1,30}$");
        lastnameValidationPattern = Pattern.compile("^[a-zA-Z' -]{1,30}$");
        emailValidationPattern = Pattern.compile("^[a-zA-Z0-9_.-]{1,30}@[a-zA-Z.]{1,30}\\.[a-zA-Z]{1,4}$");
        phoneValidationPattern = Pattern.compile("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
        birthdayValidationPattern = Pattern.compile("^(19|20)[1-9]{2}[- /](0[1-9]|1[012])[- /](0[1-9]|[12][0-9]|3[01])$");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("id = '"+id+"'");
        out.println("firstName = '"+firstName+"'");
        out.println("lastName = '"+lastName+"'");
        out.println("email = '"+email+"'");
        out.println("phone = '"+phone+"'");
        out.println("birthday = '"+birthday+"'");

        Matcher firstM = firstnameValidationPattern.matcher(firstName);
        Matcher lastM = lastnameValidationPattern.matcher(lastName);
        Matcher emailM = emailValidationPattern.matcher(email);
        Matcher phoneM = phoneValidationPattern.matcher(phone);
        Matcher birthdayM = birthdayValidationPattern.matcher(birthday);
        if (id == null) {
            if (firstM.find() && lastM.find() && emailM.find() && phoneM.find() && birthdayM.find()) {
                out.println("Passed validation");
                Person person = new Person();

                person.setFirst(firstName);
                person.setLast(lastName);
                person.setEmail(email);
                person.setPhone(phone);
                person.setBirthday(birthday);
                PersonDAO.addPeople(person);
            }
            else {
                out.println("Did not pass validation");
            }
        }
        else {
            if (firstM.find() && lastM.find() && emailM.find() && phoneM.find() && birthdayM.find()) {
                out.println("Passed validation");
                Person person = new Person();
                int id2 = Integer.parseInt(id);
                person.setId(id2);
                person.setFirst(firstName);
                person.setLast(lastName);
                person.setEmail(email);
                person.setPhone(phone);
                person.setBirthday(birthday);
                PersonDAO.editPeople(person);
            }
            else {
                out.println("Did not pass validation");
            }
        }
    }
}
