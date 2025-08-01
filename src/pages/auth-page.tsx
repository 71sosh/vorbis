import React from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';

const AuthPage: React.FC = () => {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/builder'
      }
    });
    
    if (error) console.error('Error signing in:', error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center">
          <div className="mx-auto bg-purple-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-6">
            <div className="bg-purple-500 rounded-md w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Vorbis</h1>
          <p className="text-gray-600 mb-8">
            Build beautiful dashboards with our component library
          </p>
          
          <div className="space-y-4">
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg"
              onClick={handleGoogleSignIn}
            >
              Continue with Google
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full py-6 text-lg">
                Continue with GitHub
              </Button>
              <Button variant="outline" className="w-full py-6 text-lg">
                Continue with Email
              </Button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            By signing in, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
