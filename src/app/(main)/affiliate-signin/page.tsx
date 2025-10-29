import SignInAffiliate from "@/components/SignInAffiliate";

export default function SignIn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <main className="w-full flex flex-col items-center justify-start">
        <section className="w-full flex justify-center items-start">
          <SignInAffiliate/>
        </section>
      </main>
    </div>
  );
}
