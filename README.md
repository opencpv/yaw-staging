## Code Standards and Conventions

- **Naming Conventions**: Use camelCase for variables and functions, PascalCase for components.

| **_Example_**       |              |
| ------------------- | ------------ |
| **Recommended**     | hasFirstName |
| **Not Recommended** | hasfirstname |

- **Folder Structure**: Maintain a well-defined folder structure for components, assets, and styles.

| **_Example_**  |                               |
| -------------- | ----------------------------- |
| **Components** | ui \| pages \| hoc \| section |

- **Commenting and Documentation**: Write clear comments and documentation for complex or unclear code blocks and components. Comments should also been written for component props if necessary. - Comments: - It should explain the reasoning behind the code, focusing on the "why" rather than the "what". - Documentation: - It should capture what the code block aims to do.

| _Example_           | Comment                                                       |
| ------------------- | ------------------------------------------------------------- |
| **Recommended**     | // a hacky solution to ensure that the button works on mobile |
| **Not Recommended** | // useState to hold the first name of the user                |

- **Assets**: Ensure static assets are not over 300kb.https://www.google.com/search?q=site%3Ayahoo.com&oq=site%3Ayahoo.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEINjU3MWowajmoAgCwAgE&sourceid=chrome&ie=UTF-8

- **Keys**: Whenever possible, use id/uuid for keys other than index.

- **Unused Imports**: Remove unused imports.

## Version Control

- **Commit Messages**: Use descriptive commit messages that follow the format: `type(scope): description`.
  - Type may include: - fix - feat - refactor - chore (changes to the build process or auxiliary tools) - docs

| _Examples_ |                                                     |
| ---------- | --------------------------------------------------- |
|            | feat(auth): add JWT authentication                  |
|            | fix(ui): correct button alignment on mobile devices |
|            | chore(deps): update dependency versions             |
|            | refactor(profile): simplify user profile component  |
|            | docs(readme): update installation instructions      |

## Code Reviews

- **Pull Requests**: Ensure your code is up-to-date with the branch into which the pull request will be made.

- **Reviews**: Gatekeepers must review code thoroughly before merging into the "main" branch. _(Code-wise and Site-wise)_.

- ~~**Peer Reviews**: Peers review each other’s code before merging to the main branch.~~

## Coding Practices

- **Modularization**: Adhere to writing modular and reusable code by breaking down the UI into small, manageable components.

- **DRY**: Don't Repeat Yourself! If you find yourself copying and pasting a code block more than twice in the project, consider creating it as a shared component.

- **Responsiveness**: Ensure that the UI is responsive and works well on different devices and screen sizes. - Min screen size: **280px**

- **Tags**: Whenever possible, use semantic HTML tags instead of `<div>`. Tags such as `<section>, <main>, <header>, <aside>, <footer>`, and `<small>` should be preferred over `<div>`. The `<div>` tag should be used as a last resort.

- **Accessibility**: Follow accessibility best practices to make the application usable for all users. - Keyboard Navigation: - Users should be able to navigate actionable elements using the keyboard. - Users must be able to use the keyboard to exit any closable components. - Focus color must be color consistent. i.e **Accent** color - Alternative Texts: - Ensure all images have appropriate alternative texts. - **Image**: Provide a brief description of the image. - **Icon**: Specify the action the icon performs or use an empty string for decorative icons.

| _Examples_          | Images                        |
| ------------------- | ----------------------------- |
| **Recommended**     | A couple sitting on the floor |
| **Not Recommended** | Be My Agent image             |
|                     | **Icons**                     |
| **Recommended**     | Close or "" (if decorative)   |
| **Not Recommended** | Times                         |

## Styling and Theming

- **Tailwind CSS**: Use appropriate utility classes. - Font sizes: - Please avoid `text-[40px]` or `text-[10rem]`. Use tailwind utility classes like `text-lg`. It comes along with other rules that you may miss. - Various elements have been customized to adhere to the website's recommended font sizes. Ensure you use semantic HTML elements like `<h2>`, `<h3>`, and `<small>` instead of manually setting font sizes with classes, such as `<h2 className="text-lg">` or `<p className="text-sm">`.
- **Theming**: Please follow the theming system to manage colors, fonts, and other design tokens consistently across the application. - Colors: - Ensure color is in the design system. i.e primary, accent, shade, error, info, success, etc. - Avoid `text-[#aabdee]` - Other Design Tokens: - Page wrapper: Every page should be wrapped around a wrapper. The `wrapper` class handles this. - Consistent section gaps: Gaps between sections should remain consistent. The `section` class handles this.

## Tooling and Automation

- **Linters and Formatters**: Use tools like ESLint and Prettier to enforce code quality and consistency.
- ~~**Testing**: Write unit tests, integration tests, and end-to-end tests using frameworks like Jest, Mocha, or Cypress.~~

## Collaboration and Communication

- **Knowledge Sharing**: Encourage knowledge sharing through code walkthroughs, pair programming, and documentation.

- **Alerts**: Let's adopt the practice of communicating important changes or additions to the codebase to the team. This includes: - shareable components - utility functions, - configuration changes, - new dependencies, - significant refactoring, - new features, - or any updates that could impact others.
