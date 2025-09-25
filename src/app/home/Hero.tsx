import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          轻松创建专业简历
          <br />
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
            免费、开源且强大的简历生成器
        </p>
        <Link href="/resume-builder" className="btn-primary mt-6 lg:mt-14">
          创建简历 <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
            无需注册，即刻免费使用在线简历生成器，支持实时预览！
          <Link href="/resume-builder" className="underline underline-offset-2">
            试一试
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
