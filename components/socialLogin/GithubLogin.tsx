import styles from '@/components/socialLogin/GithubLogin.module.scss';
import React from 'react';
import GithubIcon from '@/public/images/share/GitHub.svg';

interface ButtonProps {
  children: React.ReactNode;
}

function GithubLogin({ children }: ButtonProps) {
  const loginWithGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
  };

  return (
    <button
      className={styles.submitButton}
      type="button"
      onClick={loginWithGithub}
    >
      <GithubIcon className={styles.githubIcon} />
      {children}
    </button>
  );
}

export default GithubLogin;
