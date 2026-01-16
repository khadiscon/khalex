import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface KOLApplicationRequest {
  name: string;
  email: string;
  telegram: string;
  twitter: string;
  followers: string;
  niche: string;
  experience: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: KOLApplicationRequest = await req.json();
    const { name, email, telegram, twitter, followers, niche, experience, message } = data;

    // Send notification to Kraven AI team
    const teamEmailResponse = await resend.emails.send({
      from: "Kraven AI <onboarding@resend.dev>",
      to: ["kravenaimarketing@gmail.com"],
      subject: `New KOL Application: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            🚀 New KOL Application
          </h1>
          
          <div style="background: #1a1a2e; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h2 style="color: #fff; margin-top: 0;">Applicant Details</h2>
            
            <table style="width: 100%; color: #ccc;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #22D3EE;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Telegram:</td>
                <td style="padding: 8px 0;"><a href="https://t.me/${telegram.replace('@', '')}" style="color: #22D3EE;">${telegram}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Twitter/X:</td>
                <td style="padding: 8px 0;"><a href="https://twitter.com/${twitter.replace('@', '')}" style="color: #22D3EE;">${twitter}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Followers:</td>
                <td style="padding: 8px 0;">${followers}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Niche:</td>
                <td style="padding: 8px 0;">${niche}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Experience:</td>
                <td style="padding: 8px 0;">${experience}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #16213e; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #8B5CF6; margin-top: 0;">Message:</h3>
            <p style="color: #ccc; line-height: 1.6;">${message || 'No additional message provided.'}</p>
          </div>
          
          <p style="color: #888; font-size: 12px; text-align: center; margin-top: 30px;">
            This application was submitted via the Kraven AI website.
          </p>
        </div>
      `,
    });

    // Send confirmation to applicant
    const applicantEmailResponse = await resend.emails.send({
      from: "Kraven AI <onboarding@resend.dev>",
      to: [email],
      subject: "We've received your KOL application! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #8B5CF6;">Thank you for applying, ${name}!</h1>
          
          <p style="color: #333; line-height: 1.8;">
            We're excited to receive your application to join the Kraven AI KOL network. 
            Our team will review your profile and get back to you within 48 hours.
          </p>
          
          <div style="background: linear-gradient(135deg, #8B5CF6, #22D3EE); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <p style="color: white; font-size: 18px; margin: 0;">
              In the meantime, follow us on Twitter for the latest updates!
            </p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            If you have any questions, feel free to reach out to us on Telegram.
          </p>
          
          <p style="color: #333;">
            Best regards,<br>
            <strong style="color: #8B5CF6;">The Kraven AI Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Team email sent:", teamEmailResponse);
    console.log("Applicant email sent:", applicantEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-kol-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
