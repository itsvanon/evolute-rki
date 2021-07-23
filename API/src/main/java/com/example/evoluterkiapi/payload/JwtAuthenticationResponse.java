package com.example.evoluterkiapi.payload;

public class JwtAuthenticationResponse {

    private String accessToken;
    private String roleType;
    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(String accessToken, String roleType) {
        this.accessToken = accessToken;
        this.roleType = roleType;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }
}
