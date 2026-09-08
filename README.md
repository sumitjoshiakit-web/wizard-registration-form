# Wizard Registration Form

A React + Vite multi-step onboarding wizard built with **react-hook-form** and **Zod**.

## Features
- 3 steps: Personal Information, Account Details, Review & Submit
- Parent-level form state persists when navigating Back/Next
- Real-time Zod validation via react-hook-form
- Next/Submit controls respond to validation state
- Show/Hide password toggle
- Dynamic progress bar
- Final payload logged on submit and success UI displayed
- Accessible labels, error messages, keyboard navigation and focus states
- No password displayed on review screen
- No API keys or sensitive credentials required

## Run
`npm install`
`npm run dev`

## Build
`npm run build`

## Architecture
The form state is owned by the parent `App` component through `useForm`; step components receive the registration and error APIs. Zod provides the single validation schema used by the resolver.