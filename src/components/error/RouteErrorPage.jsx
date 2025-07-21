// components/RouteErrorPage.jsx
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">خطأ {error.status}</h1>
        <p className="mt-2">{error.statusText || "حدث خطأ في الصفحة"}</p>
        {error.data?.message && <pre className="mt-4">{error.data.message}</pre>}
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-red-600">حدث خطأ غير متوقع</h1>
      <p className="mt-2 text-gray-700">{error?.message || "الرجاء المحاولة لاحقًا"}</p>
    </div>
  );
}
