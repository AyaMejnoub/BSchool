package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/api")
public class QuizController {

    @Autowired
	Result result;

    @Autowired
	QuizService qService;

    private boolean submitted = false;

    @GetMapping("/")
	public String home() {
		return "home";
	}

    @ModelAttribute("result")
    public Result getResult() {
        return new Result();
    }

    @GetMapping("/quiz")
    public String quiz(@RequestParam String username, Model model, RedirectAttributes redirectAttributes) {
        if (username.isEmpty()) {
            redirectAttributes.addFlashAttribute("warning", "You must enter your name");
            return "redirect:/";
    }

    submitted = false;
    Result result = new Result();
    result.setUsername(username);
    model.addAttribute("result", result);

    List<Question> questions = QuestionRepo.findAll(); // Assuming you have a QuestionRepository injected

    QuestionForm questionForm = new QuestionForm();
    questionForm.setQuestions(questions);
    model.addAttribute("questionForm", questionForm);

    return "quiz";
}


    @PostMapping("/quiz/submit")
    public String submit(@ModelAttribute QuestionForm questionForm, Model model) {
        if (!submitted) {
            Result result = (Result) model.getAttribute("result");
            result.setTotalCorrect(quizService.getResult(questionForm));
            quizService.saveScore(result);
            submitted = true;
        }

        return "result";
    }

    @GetMapping("/quiz/score") // Updated annotation to GetMapping
    public String score(Model model) {
        List<Result> scoreList = quizService.getTopScore();
        model.addAttribute("scoreList", scoreList);

        return "scoreboard";
    }
}
