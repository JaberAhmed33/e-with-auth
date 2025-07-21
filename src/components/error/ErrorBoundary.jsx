import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("خطأ:", error, info);
  }
  render() {
    if (this.state.hasError) return <h1>حدث خطأ. { this.props.fallback || "الرجاء المحاولة لاحقًا"}</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;